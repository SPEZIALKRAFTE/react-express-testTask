import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import qs from 'qs';

function EditThing() {
    const {id} = useParams();

    const [name, setName] = useState('')
    const [sum, setSum] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [commenting, setCommenting] = useState('')
    const navigate = useNavigate();

function handleSubmit(event){
    event.preventDefault();
    axios(
        { method: 'put',
          url:  'http://localhost:7777/edit/' + id,
          data: qs.stringify({
            'name': name,
            'sum': sum,
            'author': author,
            'category': category,
            'commenting': commenting
          }),
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
        })
    .then(res => {
        console.log(res);
        navigate("/");
    }).catch(err => console.log(err));
}

  return (
    <form className='col-lg-6 offset-lg-3' onSubmit={handleSubmit}>
        <span class="badge bg-primary text-wrap">Изменить</span>
  <div class="form-group row">
    <label for="inputName" class="col-sm-2 col-form-label">Имя</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputName" onChange={e => setName(e.target.value)}/>
    </div>
    </div>
    <div class="form-group row">
    <label for="inputSum" class="col-sm-2 col-form-label">Сумма</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputSum" onChange={e => setSum(e.target.value)}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputAuthor" class="col-sm-2 col-form-label">Автор</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputAuthor" onChange={e => setAuthor(e.target.value)}/>
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Категории</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="1" onChange={e => setCategory(e.target.value)}/>
          <label class="form-check-label" for="gridRadios1">
            Овощи
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="2" onChange={e => setCategory(e.target.value)}/>
          <label class="form-check-label" for="gridRadios2">
            Фрукты
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="3" onChange={e => setCategory(e.target.value)}/>
          <label class="form-check-label" for="gridRadios3">
            Остальные
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <label for="inputComm" class="col-sm-2 col-form-label">Комментарии</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputComm" onChange={e => setCommenting(e.target.value)}/>
    </div>
    </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Изменить</button>
    </div>
  </div>
</form>
  )
}

export default EditThing