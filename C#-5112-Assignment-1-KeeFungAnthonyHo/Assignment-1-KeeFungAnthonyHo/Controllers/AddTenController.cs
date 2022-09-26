using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Assignment_1_KeeFungAnthonyHo.Controllers
{
    public class AddTenController : ApiController
    {
        /// <summary>
        /// QUESTION 1: adds ten (10) to the input number
        /// </summary>
        /// <param name="id">The input number</param>
        /// <returns>Returns input number plus ten (10)</returns>
        /// <example>
        /// GET api/AddTen/0 -> 10
        /// GET apy/AddTen/10 -> 20
        /// </example>
        public int Get(int id)
        {
            int sum = id + 10;
            return sum;
        }
    }
}
