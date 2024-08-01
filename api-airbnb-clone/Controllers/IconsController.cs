using api_airbnb_clone.Data;
using api_airbnb_clone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace api_airbnb_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IconsController : Controller
    {
        private IconsDBContext contexto;
        public IconsController(IconsDBContext contexto) 
        { 
            this.contexto = contexto;
        }

        [HttpGet]
        public async Task<IActionResult> GetIcons()
        {
            var icons = await contexto.Icones.ToListAsync();
            if (icons == null)
            {
                return NotFound();
            }
            return Ok(icons);
        }

        [HttpPost]
        public async Task<IActionResult> AddIcons(List<AddIconsRequest> addIconsRequests)
        {
            var iconsList = new List<Icons>();

            foreach (var addIconsRequest in addIconsRequests)
            {
                var icons = new Icons()
                {
                    IconsName = addIconsRequest.IconsName,
                    IconsDesign = addIconsRequest.IconsDesign
                };

                iconsList.Add(icons);
            }

            await contexto.Icones.AddRangeAsync(iconsList);
            await contexto.SaveChangesAsync();

            return Ok(iconsList);

        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetIconsById(int id)
        {
            var icons = await contexto.Icones.FindAsync(id);

            if (icons == null)
            {
                return NotFound();
            }
            return Ok(icons);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateIcons(int id, UpdateIconsRequest updateIconsRequest)
        {
            var icons = await contexto.Icones.FindAsync(id);

            if (icons == null)
            {
                return NotFound();
            }

            icons.IconsName = updateIconsRequest.IconsName;
            icons.IconsDesign = updateIconsRequest.IconsDesign;

            await contexto.SaveChangesAsync();

            return Ok(icons);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteIcons(int id) 
        { 
            var icons = await contexto.Icones.FindAsync(id);
            if( icons != null)
            {
                contexto.Remove(icons);
                await contexto.SaveChangesAsync();
                return Ok(icons);
            }
            return NotFound();
        }
    }
}