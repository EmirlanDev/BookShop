import { useState } from "react";

const Filter: React.FC = () => {
  const [a, setA] = useState<boolean>(false);
  const [b, setB] = useState<boolean>(false);
  const [c, setC] = useState<boolean>(false);
  const [d, setD] = useState<boolean>(false);
  const [e, setE] = useState<boolean>(false);
  const [f, setF] = useState<boolean>(false);
  const [g, setG] = useState<boolean>(false);
  const [h, setH] = useState<boolean>(false);
  const [i, setI] = useState<boolean>(false);
  const [j, setJ] = useState<boolean>(false);
  const [k, setK] = useState<boolean>(false);
  const [l, setL] = useState<boolean>(false);

  return (
    <div className="all__filter">
      <h1>
        Filters
        <span
          onClick={() => {
            setA(false);
            setB(false);
            setC(false);
            setD(false);
            setE(false);
            setF(false);
            setG(false);
            setH(false);
            setI(false);
            setJ(false);
            setK(false);
            setL(true);
          }}
        >
          Clear filters
        </span>
      </h1>
      <h2>Genres</h2>
      <label
        onClick={() => {
          setA(true);
          setB(false);
          setC(false);
          setD(false);
          setE(false);
          setF(false);
          setG(false);
          setH(false);
          setI(false);
          setJ(false);
          setK(false);
          setL(false);
        }}
      >
        <span
          style={{
            border: a ? "none" : "",
            background: a ? "#818eea" : "",
          }}
        ></span>
        Autographed Books
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(true);
          setC(false);
          setD(false);
          setE(false);
          setF(false);
          setG(false);
          setH(false);
          setI(false);
          setJ(false);
          setK(false);
          setL(false);
        }}
      >
        <span
          style={{
            border: b ? "none" : "",
            background: b ? "#818eea" : "",
          }}
        ></span>
        Sci-Fi
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(false);
          setC(true);
          setD(false);
          setE(false);
          setF(false);
          setG(false);
          setH(false);
          setI(false);
          setJ(false);
          setK(false);
          setL(false);
        }}
      >
        <span
          style={{
            border: c ? "none" : "",
            background: c ? "#818eea" : "",
          }}
        ></span>
        For kids
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(false);
          setC(false);
          setD(true);
          setE(false);
          setF(false);
          setG(false);
          setH(false);
          setI(false);
          setJ(false);
          setK(false);
          setL(false);
        }}
      >
        <span
          style={{
            border: d ? "none" : "",
            background: d ? "#818eea" : "",
          }}
        ></span>
        For teenagers
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(false);
          setC(false);
          setD(false);
          setE(true);
          setF(false);
          setG(false);
          setH(false);
          setI(false);
          setJ(false);
          setK(false);
          setL(false);
        }}
      >
        <span
          style={{
            border: e ? "none" : "",
            background: e ? "#818eea" : "",
          }}
        ></span>
        Finance
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(false);
          setC(false);
          setD(false);
          setE(false);
          setF(true);
          setG(false);
          setH(false);
          setI(false);
          setJ(false);
          setK(false);
          setL(false);
        }}
      >
        <span
          style={{
            border: f ? "none" : "",
            background: f ? "#818eea" : "",
          }}
        ></span>
        Detective
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(false);
          setC(false);
          setD(false);
          setE(false);
          setF(false);
          setG(true);
          setH(false);
          setI(false);
          setJ(false);
          setK(false);
          setL(false);
        }}
      >
        <span
          style={{
            border: g ? "none" : "",
            background: g ? "#818eea" : "",
          }}
        ></span>
        Romantic
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(false);
          setC(false);
          setD(false);
          setE(false);
          setF(false);
          setG(false);
          setH(true);
          setI(false);
          setJ(false);
          setK(false);
          setL(false);
        }}
      >
        <span
          style={{
            border: h ? "none" : "",
            background: h ? "#818eea" : "",
          }}
        ></span>
        Psychology
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(false);
          setC(false);
          setD(false);
          setE(false);
          setF(false);
          setG(false);
          setH(false);
          setI(true);
          setJ(false);
          setK(false);
          setL(false);
        }}
      >
        <span
          style={{
            border: i ? "none" : "",
            background: i ? "#818eea" : "",
          }}
        ></span>
        Self-Improvement
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(false);
          setC(false);
          setD(false);
          setE(false);
          setF(false);
          setG(false);
          setH(false);
          setI(false);
          setJ(true);
          setK(false);
          setL(false);
        }}
      >
        <span
          style={{
            border: j ? "none" : "",
            background: j ? "#818eea" : "",
          }}
        ></span>
        Educational
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(false);
          setC(false);
          setD(false);
          setE(false);
          setF(false);
          setG(false);
          setH(false);
          setI(false);
          setJ(false);
          setK(true);
          setL(false);
        }}
      >
        <span
          style={{
            border: k ? "none" : "",
            background: k ? "#818eea" : "",
          }}
        ></span>
        Literature
      </label>
      <label
        onClick={() => {
          setA(false);
          setB(false);
          setC(false);
          setD(false);
          setE(false);
          setF(false);
          setG(false);
          setH(false);
          setI(false);
          setJ(false);
          setK(false);
          setL(true);
        }}
      >
        <span
          style={{
            border: l ? "none" : "",
            background: l ? "#818eea" : "",
          }}
        ></span>
        Religion
      </label>
    </div>
  );
};

export default Filter;
