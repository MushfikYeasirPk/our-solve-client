import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "bg-red-500"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {/* other code */}
                  </NavLink>
    );
};

export default ActiveLink;