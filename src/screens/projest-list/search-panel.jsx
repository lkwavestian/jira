import { useEffect, useState } from 'react';
import { cleanObject, useDebounce } from 'utils';
import * as qs from 'qs';

const apiUrl = process.env.REACT_APP_API_URL;
export const SearchPanel = ({ users, setList }) => {
    console.log('users :>> ', users);
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    const debounceParam = useDebounce(param, 500);

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async (response) => {
            if (response.ok) {
                setList(await response.json());
            }
        });
    }, [debounceParam]);
    return (
        <form>
            <div>
                <input
                    type="text"
                    value={param.name}
                    onChange={(e) =>
                        setParam({
                            ...param,
                            name: e.target.value,
                        })
                    }
                />
                <select
                    value={param.personId}
                    onChange={(e) =>
                        setParam({
                            ...param,
                            personId: e.target.value,
                        })
                    }
                >
                    <option value={''}>负责人</option>
                    {users?.map((user) => (
                        <option value={user.id} key={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};
