import React from 'react';
import { useSearchParams } from 'react-router-dom';

import OutputForms from './outputForms';

const MainMeta = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchKeyword = searchParams.get('id');

    return (
        <OutputForms record={searchKeyword} />
    );
};

export default MainMeta;