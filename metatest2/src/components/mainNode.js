import React from 'react';
import { useSearchParams } from 'react-router-dom';

import OutputFormNested from './outputFormNested';

const MainNode = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchKeyword = searchParams.get('id');

    return (
        <>
            <div id={searchKeyword} style={{padding:"30px"}}>
                {
                    <OutputFormNested record={searchKeyword} />
                }
            </div>
        </>
    );
};

export default MainNode;