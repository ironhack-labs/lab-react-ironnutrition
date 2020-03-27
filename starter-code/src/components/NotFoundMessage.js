import React from 'react';

export const NotFoundMessage = ({ children }) => {
    return (
        <article className="message is-warning">
            <div className="message-body">
                {children}
            </div>
        </article>
    )
}