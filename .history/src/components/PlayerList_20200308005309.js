import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./PlayerList.css";
import PlayerListItem from "./PlayerListItem";
import { Pagination } from "antd";

const PlayerList = props => {
  const { players } = props;
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const total = players.length;

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }

  useEffect(() => {
    // console.log(players.slice((current - 1) * 5, current * 5))
    setData(players.slice((current - 1) * 5, current * 5));
  }, [players, current]);

  const onChange = value => {
    setCurrent(value);
  };
  return (
    <>
      <ul className={styles.playerList}>
        {data.map((player, index) => {
          return (
            <PlayerListItem
              key={index}
              id={index}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
              {...props.actions}
            />
          );
        })}
      </ul>
      <Pagination
        showQuickJumper
        defaultCurrent={1}
        current={current}
        pageSize={5}
        total={total}
        onChange={onChange}
      />
    </>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default PlayerList;
