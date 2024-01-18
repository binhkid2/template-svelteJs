

<script lang="ts">
	
	import axios from 'axios';
const API_KEY = "c611dcb7-e485-4572-a208-591a6c09e28b"; // API KEY HERE
    const sdxlURL ="http://localhost:8080/api/text2image/"
	let prompt = 'a usa girl'
	let image_url=''
	let costVnd = 0
    let jobId=''
    let verifyJobUrl=""
    let isFetching = false
async function GetImage(){
    isFetching =true
image_url=''
costVnd = 0
let presetStyle= "3d-model"
let model =  "sd_xl_base_1.0.safetensors [be9edd61]"
const url = sdxlURL +"?prompt="+ encodeURIComponent(prompt) + "&style=" + presetStyle + "&width=" + 1024 + "&height=" + 1024 + "&model=" + encodeURIComponent(model) ;
console.log("url :" + url)
try {
    const response = await fetch(url, {});
    console.log('response :' + response.toString());

    const UrlRender = await response.json();
    console.log('UrlRender :' + UrlRender);
    const imgResponse = await fetch(UrlRender);
    while (isFetching) {
      const imgResponse = await fetch(UrlRender);

      if (imgResponse.status !== 404) {
        image_url = UrlRender;
        isFetching = false;
      } else {
        // Wait for 0.5 seconds before the next iteration
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle errors appropriately
  }
}

</script>

<h1>sdxl</h1>
{#if costVnd != 0}
<h1>Cost VND = {costVnd}</h1>
{/if}
<h1>stable-diffusion</h1>
<input type="text" bind:value={prompt}>
<button on:click={GetImage}>Send to get Image</button>

{#if image_url != ''}
<h1>{image_url}</h1>
<img src={image_url} alt="theheai" />
{/if}
