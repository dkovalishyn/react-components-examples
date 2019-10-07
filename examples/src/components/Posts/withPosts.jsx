import React, { Component } from "react";
import { getResource, URLS } from "../../services/api";

export default WrappedComponent => {
    class WithPosts extends Component {
        state = { posts: null, error: null };

        async componentDidMount() {
            try {
                const posts = await getResource(URLS.posts);
                this.setState({ posts });
            } catch (e) {
                this.setState({ error: e.message });
            }
        }

        render() {
            return <WrappedComponent {...this.props} {...this.state} />;
        }
    }

    return WithPosts;
};
