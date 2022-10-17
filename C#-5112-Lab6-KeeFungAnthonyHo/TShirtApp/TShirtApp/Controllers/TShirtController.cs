using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TShirtApp.Controllers
{
    public class TShirtController : Controller
    {
        // GET: TShirt/Index
        public ActionResult Index()
        {
            return View();
        }

        //GET: /TShirt/Confirm
        public ActionResult Confirm(string CustomerName, int OrderSize, int OrderColour)
        {
            int totalCost = 0;
            string OrderSizeActual;
            string OrderColourActual;

            switch (OrderSize)
            {
                case 1:
                    totalCost += 10;
                    OrderSizeActual = "Small";
                    break;
                case 2:
                    totalCost += 15;
                    OrderSizeActual = "Medium";
                    break;
                case 3:
                    totalCost += 20;
                    OrderSizeActual = "Large";
                    break;
                default:
                    totalCost += 0;
                    OrderSizeActual = "You did not select a size.";
                    break;
            }

            switch (OrderColour)
            {
                case 1:
                    totalCost += 5;
                    OrderColourActual = "Blue";
                    break;
                case 2:
                    totalCost += 0;
                    OrderColourActual = "Red";
                    break;
                case 3:
                    totalCost += 10;
                    OrderColourActual = "Black";
                    break;
                default:
                    totalCost += 0;
                    OrderColourActual = "You did not select a colour";
                    break;
            }
            

            ViewData["Summary"] = "Please see your purchase details below:";
            ViewData["CustomerName"] = CustomerName;
            ViewData["OrderSize"] = OrderSizeActual;
            ViewData["OrderColour"] = OrderColourActual;
            ViewData["totalCost"] = "Your total cost is $" + totalCost;
            return View();
        }
    }
}