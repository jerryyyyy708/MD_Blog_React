import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

function BlogPost({ mdFilePath }) {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(mdFilePath)
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, [mdFilePath]);

    return <Markdown>{content}</Markdown>;
}

export default BlogPost;