function API({ title,description,version }) {
    return (
      <div className="h-60 text-white flex w-full justify-center items-center">
        <button className="items-center w-1/4 justify-center flex flex-col hover:opacity-80">
            <img className="h-40 w-40 hover:w-[9.5rem] hover:h-[9.5rem]" src={"https://openaicom.imgix.net/e43232d6-2c49-4f2e-9863-66150c7f56da/our-approach-to-ai-safety.jpg?fm=auto&amp;auto=compress,format&amp;fit=min&amp;rect=0,0,1024,1024&amp;w=500&amp;h=500"} alt="api"/>
            <p>
                build your app with iChat
            </p>
        </button>
        <button className="items-center w-1/4 justify-center flex flex-col hover:opacity-80">
            <img className="h-40 w-40 hover:w-[9.5rem] hover:h-[9.5rem]" src={"https://openaicom.imgix.net/13c810cb-0592-442d-9580-714838b8ed28/whisper.jpg?fm=auto&amp;auto=compress,format&amp;fit=min&amp;rect=0,0,2048,2048&amp;w=500&amp;h=500"} alt="api"/>
            <p>
                build your app with iChat
            </p>
        </button>
        <button className="items-center w-1/4 justify-center flex flex-col hover:opacity-80">
            <img className="h-40 w-40 hover:w-[9.5rem] hover:h-[9.5rem]" src={"https://openaicom.imgix.net/243b509f-9d19-438e-a2ce-05e9ea5086a9/gpt-4.png?fm=auto&amp;auto=compress,format&amp;fit=min&amp;rect=0,0,2048,2048&amp;w=500&amp;h=500"} alt="api"/>
            <p>
                build your app with iChat
            </p>
        </button>
        <button className="items-center w-1/4 justify-center flex flex-col hover:opacity-80">
            <img className="h-40 w-40 hover:w-[9.5rem] hover:h-[9.5rem]" src={"https://openaicom.imgix.net/33edbc89-4974-4992-9870-c76435ca0e2f/bug-bounty-program.png?fm=auto&amp;auto=compress,format&amp;fit=min&amp;rect=0,0,2048,2048&amp;w=500&amp;h=500"} alt="api"/>
            <p>
                build your app with iChat
            </p>
        </button>
      </div>
    );
  }
  
  export default API;
  