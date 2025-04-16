import {createServer} from "http"

const proxy = createServer()

async function forward_proxy(url: URL, headers: Header, method: string) -> any{

  // super-skaterhax の arm11code.bin からのリクエストか
  if(
    
    method !== "GET" ||
    url !== "https://smea.mtheall.com/get_ropbin_payload.php" ||
    headers.get("User-Agent") !== "3dsbrowserhax_hblauncher_loader/v1.2"
    
  ){

    return new Response("Not Found.", {status: 404});
  }


  //
  const request_parameter = get_otherapp_bin_request_param(url.param);
    
  // 
  const otherapp_bin = await fetch("http://smealum.github.io/"+request_parameter).then(
    async res => await res.body();

  return new Response(otherapp_bin, {headers: {"content-type": ""}});
  
}

function get_otherapp_bin_request_param(parameter: Object) -> string{


  
  // https://smealum.github.io/ninjhax2/JL1Xf2KFVm/otherapp/POST5_J_12288_8203.bin
  return
}

proxy.on("request", async () => {
  await forward_proxy()
})

proxy.listen("8000");
