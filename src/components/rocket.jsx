import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket } from '../slices/featureRocket/rocketSlice';
import styles from '../styles/rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  const { status } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (status === false) dispatch(fetchRockets());
  }, [dispatch, status]);

  return (
    <div className="container">
      {status && rockets.map((each) => (
        <article key={each.id} className="article">
          <img src={each.image} className="img" alt={each.name} />
          <div>
            <h2 className={styles.title}>{each.name}</h2>
            <p className="rocketDetails">
              {each.reserved ? <span className="span">Reserved</span> : ''}
              {each.description}
            </p>
            <button
              type="button"
              className={each.reserved ? styles.unreserve : styles.reserve}
              onClick={() => dispatch(reserveRocket(each.id))}
            >
              {each.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};
export default Rockets;