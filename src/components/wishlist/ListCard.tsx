import { Button } from "@/components/ui/button";
import { ListType } from "@/pages/WishList";
import { Link } from "react-router-dom";


function ListCard(props: { list: ListType }) {

    return (
        <div className=" h-96 md:h-72 lg:h-96 w-10/12 md:w-11/12 lg:w-80 bg-black bg-opacity-60 lg:bg-opacity-30 lg:hover:bg-opacity-60 transition border-2 rounded-md border-classicwhite text-classicwhite p-10 flex flex-col items-center justify-between">
            
            <div className=" flex flex-col items-center justify-between">
                <p className=" h-16 text-2xl font-bold">{props.list.name}</p>
                <p className="font-light mt-8">{props.list.description}</p>
            </div>

            <Link to={props.list.link} target="_blank">
                <Button variant="outline" className="font-bold">Gå til ønskeliste</Button>
            </Link>
            
        </div>
    );
}

export default ListCard;