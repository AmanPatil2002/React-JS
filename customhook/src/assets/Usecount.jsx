import { useState } from 'react';

const useCount = () => {
    const [count, setCount] = useState(0);

    function add(){
        setCount(count+1)
    }
    function minus(){
        setCount(count-1)
    }
    function rst(){
        setCount(0)
    }

    return [count,add,minus,rst]
};

export default useCount;