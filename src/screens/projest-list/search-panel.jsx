import { useEffect, useState } from 'react';
import { cleanObject } from 'utils';
import * as qs from 'qs';

const apiUrl = process.env.REACT_APP_API_URL;
export const SearchPanel = ({ users, setList }) => {
    console.log('users :>> ', users);
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (response) => {
            if (response.ok) {
                setList(await response.json());
            }
        });
    }, [param]);
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
