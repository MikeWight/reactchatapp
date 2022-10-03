import React from 'react';

const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `fixed mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right`,
    received: `bg-[#e5e5ea] text-black float-left rounder-br-full`,
};

const Message = () => {
    return (
        <div>
            <div className={style.message}>
                <p className={style.name}>Dave</p>
                <p>I'm learning React</p>
            </div>
        </div>
    );
};

export default Message;
