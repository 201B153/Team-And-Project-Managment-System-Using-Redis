import Image from 'next/image';
import { useState } from 'react';

export default function TeamForm() {
  const [hits, setHits] = useState([]);

  const search = async (event) => {
    const q = event.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch('/api/search?' + params);

      const result = await res.json();
      console.log(result);
      setHits(result['teams']);
    }
  };

  return (
    <div className='container'>
      <input
        onChange={search}
        type="text"
        placeholder="search teams..."
        className="form-control"
      />

      <ul className="list-group">
        {hits.map((hit) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={hit.entityId}
          >
            <Image width="50px" src={hit.Project_ScreenShot} alt="hello" />

            <div className="ms-2 me-auto">
              <div className="fw-bold">
                {hit.Project_Number} {hit.Project_Name}
              </div>
              {hit.Project_Description}
            </div>
          </li>
        ))}
      </ul>
   
    </div>
  );
}
