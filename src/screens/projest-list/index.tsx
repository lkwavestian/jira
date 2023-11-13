import { useEffect, useState } from 'react';
import { List } from './list';
import { SearchPanel } from './search-panel';
import { useMount } from 'utils';

const apiUrl = process.env.REACT_APP_API_URL;
console.log('apiUrl :>> ', apiUrl);
export const ProjectListScreen = () => {
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async (response) => {
            if (response.ok) {
                setUsers(await response.json());
            }
        });
    });
    return (
        <div>
            <SearchPanel setList={setList} users={users} />
            <List list={list} users={users} />
        </div>
    );
};
