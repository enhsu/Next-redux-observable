import type { NextPage } from "next";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import { addCount, fetchUser } from "~/store/asyncData/action";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const state: RootState = useSelector((state) => {
    return state as RootState;
  });

  return (
    <div>
      <button onClick={() => dispatch(fetchUser())}>fetch user</button>
      <button onClick={() => dispatch(addCount())}>Add count</button>
      <div>Count: {state.asyncData.count}</div>

      {state.asyncData.data !== null && (
        <ul>
          {state.asyncData.data.map(
            (item: {
              id: Key | null | undefined;
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }) => (
              <li key={item.id}>{item.name}</li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Home;
