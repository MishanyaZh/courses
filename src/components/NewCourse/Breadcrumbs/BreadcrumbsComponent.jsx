import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreadcrumbsComponent = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/courseplan"
      onClick={handleClick}
    >
      Kursy
    </Link>,
    <Typography key="3" color="text.primary">
      Dodaj nowy kurs
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
