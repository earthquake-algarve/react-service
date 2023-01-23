import './insertRecord.css'
import { useState, useRef } from 'react';

//fazer validações dos campos - todos os campos devem estar preenchidos
export default function InsertRecord () {

    const ref = useRef()

    const [name, setName] = useState("");
    const [local, setLocal] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState();
    const [message, setMessage] = useState("");
/*     const [duracao, setDuracao] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    
    */

    let handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append("name", name)
        formData.append("price", price)
        formData.append("local", local)
        /* formData.append("duracao", duracao)
        formData.append("descricao", descricao)
        formData.append("categoria", categoria) */
        formData.append('image', file)

        try {

            await fetch("http://entertours-ofertas.us-east-1.elasticbeanstalk.com/save", {
                method: "POST",
                body:formData
            })
            .then(response => {

                if (response.status === 200) {
                    setName("");
                    setPrice("");
                    setLocal("");
                    /* setDuracao("");
                    setDescricao("");
                    setCategoria(""); */
                    setMessage("Tour created successfully");
                } 
                else {
                    setMessage("Some error occured");
                }
            })
        }   
        catch (err) {
          console.log(err);
        }
      };

      function reset(){
        ref.current.value = ""
      }

    return (
        <>
            <div className='insert-container'>
                <div className="insert-title">Insert new tour</div>

                <div className='logo'>
                    <img src="img/logoEnterTours.jfif" alt='logo'></img>
                </div>

                <div className='insert-data'>
                    <form onSubmit={handleSubmit} method="POST">
                        <label htmlFor="tour-name-input">Tour's Name</label>
                        <input type="text" id="tour-name-input " className='tour-name-input' value={name} onChange={(e) => setName(e.target.value)}/>

                        <label htmlFor="localizacao-input">Localização</label>
                        <input type="text" className='localizacao-input' value={local} id="price-input" onChange={(e) => setLocal(e.target.value)}/>
                        
                        <label htmlFor="price-input">Price</label>
                        <input type="number" className='price-input' value={price} id="price-input" onChange={(e) => setPrice(e.target.value)}/>

                         <label htmlFor="duracao-input">Duration</label>
                        <input type="text" className='duracao-input' id="price-input" /* onChange={(e) => setDuracao(e.target.value)} */ />

                        <label htmlFor="descricao-input">Descrição</label>
                        <input type="text" className='descricao-input' id="price-input"  /* onChange={(e) => setDescricao(e.target.value)}  *//>

                        {/* aqui tem que ser um select */}
                        <label htmlFor="categoria-input">Categoria</label>
                        <input type="text" className='categoria-input' id="price-input" /* onChange={(e) => setCategoria(e.target.value)} */ /> 

                        <label htmlFor="file-input">Tour's image</label>
                        <input type="file"  className='file-input'  id="file-input" onChange={(e) => setFile(e.target.files[0])}  ref={ref}/>

                        <div className="button-div">
                            <input type="submit"  value="Insert" className='button-submit' onClick={reset}/>
                        </div>
                        
                        <div style={{margin: "0 auto"}} className="message">{message ? <p>{message}</p> : null}</div>
                               
                    </form>
                </div>

            </div>
        </>
    )
}