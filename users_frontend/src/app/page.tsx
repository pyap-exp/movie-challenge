"use client";
import { useState } from "react";

import styles from "@/resources/page.module.css";

import CustomHeader from "@/components/custom_header";
import CustomFooter from "@/components/custom_footer";
import CustomTable from "@/components/custom_table";
import { range } from "structkit-ts";

import { getListOfMovie } from "@/data/api/movie";
export default function Home() {
  const [search, setSearch] = useState("");
  const [apiContent, setApiContent] = useState([]);
  const [apiCount, setApiCount] = useState(0);
  const [page, setPage] = useState(1);
  const pageLimit = 10;
  async function submit() {
    const data = await getListOfMovie(search, 1);
    setPage(1);
    setApiCount(data.data.count);
    setApiContent(data.data.results);
  }
  async function paginAction(id: number) {
    const data = await getListOfMovie(search, id);
    setPage(id);
    setApiContent(data.data.results);
  }
  return (
    <>
      <CustomHeader />
      <div className="container-fluid" align="center">
        <div className={styles.box_search}>
          <input
            type="text"
            placeholder="Search now"
            onChange={(e) => setSearch(e.target.value)}
            className="fields container-inline"
          />
          <button className="button container-inline" onClick={(e) => submit()}>
            Search
          </button>
          <br />
          <div align="left">{apiCount} Result(s)</div>
        </div>
        <CustomTable api_content={apiContent} />
        <div className={styles.page_box}>
          {range(Math.ceil(apiCount / pageLimit)).map((d) => (
            <>
              <span
                onClick={(e) => paginAction(d)}
                className={page == d ? styles.page_btn_select : styles.page_btn}
              >
                {d}
              </span>
            </>
          ))}
        </div>
      </div>
      <CustomFooter />
    </>
  );
}
