import AddWardrobeRight from "../Components/AddWardrobeRight";
import AddWardrobeLeft from "../Components/AddWardrobeLeft";
export default function AddToWardrobe(props){
    return(
        <>
        <br/><br/><br/>

    <div className="soon">
            <div className="container">



                <div className="row">
                    <div className="col-md-9 col-lg-8">
                        <div className="soon-content text-center">
                          <AddWardrobeLeft></AddWardrobeLeft>
                        </div>
                    </div>
                </div>
            </div>

            <AddWardrobeRight></AddWardrobeRight>
        </div>
            </>
    )
}