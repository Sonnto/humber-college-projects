using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Diagnostics;

namespace TShirtApp.Controllers
{
    public class ContactController : Controller
    {
        // GET: Contact/Index
        public ActionResult Index()
        {
            return View();
        }

        //GET: /Contact/Thanks

        public ActionResult Thanks(string ContactName, string ContactSubject, string ContactMessage)
        {
            ViewData["Summary"] = "Your feedback is important to us. Please allow 24 hours for a response.";
            ViewData["Priority"] = "High";
            ViewData["ContactName"] = ContactName;
            ViewData["ContactSubject"] = ContactSubject;
            ViewData["ContactMessage"] = ContactMessage;
            Debug.WriteLine("Name: " + ContactName + " Subject: " + ContactSubject + " Message: " + ContactMessage);
            return View();
        }
    }
}