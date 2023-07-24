import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

function Detail({ params }:InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(params.params);
  const [title, id] = params.params //|| []; (csr일때만)
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

export default Detail;

export const getServerSideProps:GetServerSideProps = async ({ params }) => {
  return {
    props: { params },
  };
};
