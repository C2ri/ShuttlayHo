import React, { useState } from "react";
import axios from "axios";

export const loginApi = async () => {
  const url = `/test`;
  try {
    const res = await axios({
      method: "get",
      url,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    window.alert("fuck");
  }
};
