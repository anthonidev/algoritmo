import React, { FunctionComponent } from 'react'

const Item: FunctionComponent<{
    item: any
}> = ({ item }) => {
    return (
        <div >
         
            <div className="flex">

                {item.map((ite: any) => (
                    <p key={ite} className="mx-3 p-1 bg-teal-700 my-1 w-7 text-xs text-center uppercase text-green-400 font-bold">{ite}</p>
                ))}
            </div>

        </div>
    )
}
export default Item