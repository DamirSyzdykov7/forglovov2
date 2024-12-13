import React from "react";
import Geo from "../../../shared/assets/geo";


function FindLocate() {
    
    return (
        <>
            <form>
                <div className="flex">
                    <input className=" rounded-md w-[336px] h-[72px]" type="text" placeholder={`${<Geo/>}Enter delivery address`}></input>
                    <button className="ml-[4px] rounded	w-[88px] h-[72px] text-center mr-[170px] bg-[#FFE145]" type="submit"><div>send</div></button>
                </div>
            </form>
        </>
    )
}

export default FindLocate