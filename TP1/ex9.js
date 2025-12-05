async function get5Titres(){
    try{
        //lancer req asynchrone
        const res= await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!res.ok) throw new Error(`HTTP ${res.status}`);//vérife res.ok pour detecter statut http (404,500..)
        const data = await res.json(); 
        data.slice(0,5).forEach(p=> console.log(p.title));
    }catch(error){
        console.log("erreur",error)
    }
}
get5Titres();