import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NewsPage(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px",
        }}
      >
        <div>
          <h4>Новости</h4>
          <a href={"#/news/add"}>
            <Button variant="primary">Добавить</Button>
          </a>
        </div>
        <div>
          <Button onClick={props.logout} variant="danger">
            Выйти
          </Button>
        </div>
      </div>
      {props.newsList.map((item, index) => (
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          key={item.title + index}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <div>
              <p>index:</p>
              {index}
            </div>
            <div>
              <p>Заголовок:</p>
              {item.title}
            </div>
            <div>
              <p>Описание:</p>
              {item.description}
            </div>
            <div>
              <p>Последнее изменение:</p>
              {item.edited}
            </div>
            <div>
              <p>Картинка:</p>
              <img height="50" width="50" src={item.image} />
            </div>
          </div>
          <div>
            <Link to={`/news/${index}`}>
              <Button variant="success">Редактировать</Button>
            </Link>
            <Button onClick={() => props.delete(index)} variant="danger">
              Удалить
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
