import React from "react";
import auth from "./auth";
import { Route, Link, useParams } from "react-router-dom";

import Reportes from "./reportes";

export const AppLayout = props => {
  return (
    <div>
      <h1>App Dash Layout</h1>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>

      <div>
        <nav>
          <Link to={props.match.path + "/reportes"}>Reportes </Link>{" "}
          <Link to={props.match.path + "/one"}> one</Link>{" "}
          <Link to={props.match.path + "/two"}> two </Link>{" "}
          <Link to={props.match.path + "/reportes/45123"}> 45123 </Link>{" "}
          <Link to={props.match.path + "/reportes/678"}> 678 </Link>{" "}
          <Link to={props.match.path + "/reportes/132"}> 123 </Link>{" "}
        </nav>
        <div>
          <Route
            exact
            path={`${props.match.path}/reportes`}
            component={Reportes}
          />
          <Route path={`${props.match.path}/one`} component={Page2} />
          <Route path={`${props.match.path}/two`} component={Page3} />
          <Route
            exact
            path={`${props.match.path}/reportes/:id`}
            component={PageParams}
          />
        </div>
      </div>
    </div>
  );
};

function Page2() {
  return <div>soy pagina 2</div>;
}
function Page3() {
  return <div>soy pagina </div>;
}

function PageParams() {
  let { id } = useParams();
  return <div>soy el id: {id}</div>;
}
