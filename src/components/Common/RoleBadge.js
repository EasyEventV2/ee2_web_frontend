import React from 'react';
import { Role } from 'constants/common';

function RoleBadge({ role }) {
  if (role === Role.ADMIN) {
    return <span className="badge badge-primary">ADMIN</span>;
  }
  if (role === Role.STAFF) {
    return <span className="badge badge-secondary">STAFF</span>;
  }
  if (role === Role.OPERATOR) {
    return <span className="badge badge-success">OPERATOR</span>;
  }
  return null;
}

export default RoleBadge;
