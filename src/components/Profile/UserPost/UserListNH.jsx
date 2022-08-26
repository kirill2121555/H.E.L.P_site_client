import React from "react";
import { NavLink } from "react-router-dom";
import { deleteonepost } from "../../http/feth";

const ListNeedhelp = (props) => {

  const deletepost = async () => {
    try {
      const id = props.nh._id
      await deleteonepost(id);
      window.location.reload()
    } catch (e) {
      console.log('error')
    }
  }

  return (
    <div>
      <div class="card" >
        <h2 class="card-header">{props.nh.name}</h2>
        <div class="card-body">
          <h5 class="clip">{props.nh.description}</h5>
          <p><small>Имя: {props.nh.secondName}</small></p>
          <p><small>Телефое: {props.nh.phone} </small></p>
          <p><small>Почта: {props.nh.listThings}</small></p>
          <p><small>Город: {props.nh.city}</small></p>
          <NavLink to={'/nh/' + props.nh._id}><button type="button" class="btn btn-primary">Подробнее</button></NavLink>
          <NavLink to={'/nhupdate/' + props.nh._id}><button type="button" class="btn btn-success">Редактировать</button></NavLink>
          <button type="button" class="btn btn-danger" onClick={deletepost}>Удалить</button>
        </div>
      </div>
      <br></br>
    </div>
  )
}
export default ListNeedhelp
