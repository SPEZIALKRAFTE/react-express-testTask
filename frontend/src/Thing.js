import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Thing() {

    const [thing, setThing] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:7777/')
        .then(res => setThing(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios({
                method: 'delete',
                url: 'http://localhost:7777/thing/' + id,
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                }
            })
            window.location.reload();
        }catch (err){ console.log(err);}
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-top'>
        <div className='w-100 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success'>Add + </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Дата</th>
                        <th>Имя</th>
                        <th>Добавил</th>
                        <th>Сумма</th>
                        <th>Категория</th>
                        <th>Комментарии</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        thing.map((data, i) => (<tr key={i}>
                            <td>{data.id}</td>
                            <td>{data.date_time}</td>
                            <td>{data.nameOfThing}</td>
                            <td>{data.author}</td>
                            <td>{data.sum}</td>
                            <td>{data.category}</td>
                            <td>{data.commenting}</td>
                            <td>
                                <Link to={`edit/${data.id}`} type="button" class="btn btn-outline-primary">Изменить</Link>
                                <button type="button" class="btn btn-outline-primary" onClick={e => handleDelete(data.id)}>Удалить</button>
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>
            </div>
            </div>
  )
}

export default Thing