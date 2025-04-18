export default{
    async fetch(request, env, ctx){

        const url = new URL(request.url)
        
        if(
            
            request.method === "GET" &&
            url.pathname === "/?version=NEW-11-17-0-50-JPN" &&
            headers["user-agent"] === "3dsbrowserhax_hblauncher_loader/v1.2"
            
          ){
            return new Response(null, {
                headers: {
                    Location: "http://smealum.github.io/ninjhax2/JL1Xf2KFVm/r/N3DS_J_27649_9221.bin"
                }
            })
          }
        
        return {body: "Not Found.", status: 404}
        
    }
}
