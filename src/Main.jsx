import Invoice from "./Invoice";

const Main = () => {
    return ( 
        <div className="border-1 border-gray-200 bg-gray-50 px-9 py-8 h-auto max-lg:px-3 xl:flex xl:justify-center">
            <div className="w-full xl:max-w-325">
                <Invoice />
            </div>
        </div>
     );
}
 
export default Main;