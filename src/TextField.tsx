import React, { useState, useRef } from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    // fn: () => void;
    // fn: () => number;
    fn?: (bob: string) => string;
    // obj: {
    //     f1: string
    // }
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

const TextField: React.FC<Props> = ({ text, person, handleChange }) => {
    // const [ count, setCount ] = useState<number | null | undefined | string>(5);
    const [ count, setCount ] = useState<TextNode>({ text: 'hello'});
    // setCount({ text });

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef} >
            <input 
                type="text" 
                ref={inputRef}
                onChange={handleChange}
            />
        </div>
    )
};

export default TextField;
