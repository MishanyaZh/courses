import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreadcrumbsComponent = ({ breadData, curent }) => {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const breadcrumbs = [
    breadData.map(bread => (
      <Link
        underline="hover"
        key={bread.key}
        color="inherit"
        href={bread.href}
        onClick={handleClick}
      >
        {bread.name}
      </Link>
    )),
    <Typography key="3" color="text.primary">
      {curent}
    </Typography>,
  ];

  return (
    <>
      <Breadcrumbs
        style={{ marginTop: '30px', marginBottom: '32px' }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </>
  );
};

export default BreadcrumbsComponent;
