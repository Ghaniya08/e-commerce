import Detailpage from "./Detailpage";
const Detail = ({params} : {params : {detail : string}})=>{
    return(
           <div className="text-gray-600 body-font overflow-hidden">
          <Detailpage params={params}/>
</div>
    )
}
export default Detail ;