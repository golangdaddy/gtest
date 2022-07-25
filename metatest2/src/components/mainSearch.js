import React from 'react';
import { useSearchParams } from 'react-router-dom';

import OutputForm from './outputForm';
import RecordSearch from '../components/record_search';

const MainSearch = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchKeyword = searchParams.get('id');

    return (
        <>
                <div id={searchKeyword} style={{width:"100%",padding:"30px"}}>
                    {
                       searchKeyword && (
                        <>
                            <div>
                                <OutputForm record={searchKeyword}></OutputForm>
                            </div>
                            <div>
                                <iframe style={{width:"100%",height:"500px"}} title={searchKeyword} src={'/metas?id='+searchKeyword} />
                            </div>
                        </>
                       )
                    }
                    {
                       searchKeyword || <RecordSearch></RecordSearch>
                    }
                </div>
        </>
    );
};

export default MainSearch;