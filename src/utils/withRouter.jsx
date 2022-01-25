import {
    useLocation,
    useNavigate,
    useMatch,
    useParams
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let match = useMatch(location.pathname);
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params, match }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter