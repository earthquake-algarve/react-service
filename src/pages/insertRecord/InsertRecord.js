import './insertRecord.css'



export default function InsertRecord () {
    return (
        <>
            <div className='insert-container'>
                <div className="insert-title">Insert new tour</div>

                <div className='logo'>
                    <img src="img/logoEnterTours.jfif" alt='logo'></img>
                </div>

                <div className='insert-data'>
                    <form method='POST'>
                        <label htmlFor="tour-name-input">Tour's Name</label>
                        <input type="text" id="tour-name-input " className='tour-name-input'/>

                        <label htmlFor="price-input">Price</label>
                        <input type="number" className='price-input' id="price-input"/>

                        <label htmlFor="file-input">Tour's image</label>
                        <input type="file"  className='file-input' id="file-input"/>

                        <div className="button-div">
                            <input type="submit"  value="Insert" className='button-submit'/>
                        </div>       
                    </form>
                </div>

            </div>
        </>
    )
}