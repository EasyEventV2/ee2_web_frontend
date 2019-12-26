import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PagingText } from 'constants/common';

function Pagination({
  totalPages,
  currentPage,
  alwaysShowNavigator,
  location,
  className,
}) {
  const getBeforeCurrent = (limit = 5) => {
    const result = [];
    let current = currentPage;
    while (result.length < limit && current > 1) {
      current--;
      result.unshift(current);
    }
    return result;
  };

  const getAfterCurrent = (limit = 5) => {
    const result = [];
    let current = currentPage;
    while (result.length < limit && current < totalPages) {
      current++;
      result.push(current);
    }
    return result;
  };

  const renderItem = (item) => {
    let page = item;

    if (item === PagingText.FIRST) page = 1;
    if (item === PagingText.LAST) page = totalPages;

    const active = (currentPage === page)
      && (item !== PagingText.FIRST)
      && (item !== PagingText.LAST);

    return (
      <li className={`page-item${active ? ' active' : ''}`}>
        <Link
          className="page-link"
          to={`${location.pathname}?p=${page}`}
        >
          <span>{item}</span>
        </Link>
      </li>
    );
  };

  let items = [currentPage];
  const beforeCurrent = getBeforeCurrent();
  const afterCurrent = getAfterCurrent();

  if (beforeCurrent.length > 0) {
    items = beforeCurrent.concat(items);
  }

  if (afterCurrent.length > 0) {
    items = items.concat(afterCurrent);
  }

  return (
    <nav className={className}>
      <ul className="pagination">
        {(alwaysShowNavigator || beforeCurrent.length > 0) && renderItem(PagingText.FIRST)}
        {items.map(item => renderItem(item))}
        {(alwaysShowNavigator || afterCurrent.length > 0) && renderItem(PagingText.LAST)}
      </ul>
    </nav>
  );
}

export default withRouter(Pagination);
