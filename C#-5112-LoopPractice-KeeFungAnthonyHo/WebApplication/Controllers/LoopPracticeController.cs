using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.WebPages;

namespace WebApplication.Controllers
{
    public class LoopPracticeController : ApiController
    {
        ///GET api/LoopPractice/Counter/{start}/{limit}/{step}
        /// <summary>
        /// A list of integers {start} to {limit} counting by {step}
        /// </summary>
        /// <returns>A list of integers {start} to {limit} counting by {step}</returns>
        ///<example>
        ///GET: api/LoopPractice/Counter/0/4/1	->	[0,1,2,3,4]</example>
        [HttpGet]
        [Route("api/LoopPractice/Counter/{start}/{limit}/{step}")]
        public string Counter(int start, int limit, int step)
        {
            string message = "";
            string delimiter = ",";
            string squareBracketStart = "[";
            string squareBracketEnd = "]";

            while (start <= limit)
            {
                if (start == limit)
                {
                    delimiter = ""; // no comma
                }
                message = message + start.ToString() + delimiter; // comma

                start = start + step;
            }
            return squareBracketStart + message + squareBracketEnd;
        }

        /// <summary>
        /// GET api/LoopPractice/FizzyBuzzy/{start}/{limit}/{step}/{Fizzy}/{Buzzy}
        /// outputs: a string which counts from { start } to {limit } counting by { step }
        /// In addition:
        /// - numbers divisible by {Fizzy}are replaced with "Fizzy"
        /// - numbers divisible by {Buzzy} are replaced with "Buzzy"
        /// - numbers divisible by {Fizzy} and {Buzzy} are replaced with "FizzyBuzzy"
        /// </summary>
        /// <param name="start"></param>
        /// <param name="limit"></param>
        /// <param name="step"></param>
        /// <param name="fizzy"></param>
        /// <param name="buzzy"></param>
        /// <example>
        /// GET: api/LoopPractice/FizzyBuzzy/1/25/4/3/7 -> "1,5,Fizzy,13,17,FizzyBuzzy,25"
        /// </example>
        [HttpGet]
        [Route("api/LoopPractice/FizzyBuzzy/{start}/{limit}/{step}/{fizzy}/{buzzy}")]
        public string FizzyBuzzy(int start, int limit, int step, int fizzy, int buzzy)
        {
            string message = "";
            string delimiter = ",";

            for (int i = start; i <= limit; i+=step)
            {
                if (i % fizzy == 0 && i % buzzy == 0) //% = divisiable by; A%B
                {
                    message = message + "FizzyBuzzy" + delimiter;
                }
                else if (i % buzzy == 0)
                {
                    message = message + "Buzzy" + delimiter;
                }
                else if (i % fizzy == 0)
                {
                    message = message + "Fizzy" + delimiter;
                }
                else
                {
                    message = message + i + delimiter;
                }
            }
            return message;
        }
    }
}
