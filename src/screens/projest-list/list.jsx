import { useState } from 'react';

export const List = ({ list, users }) => {
    console.log('list :>> ', list);
    console.log('users :>> ', users);
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {list?.map((project) => (
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{users.find((user) => user.id === project.personId)?.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
