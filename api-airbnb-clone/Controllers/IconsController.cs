using api_airbnb_clone.Models;
using api_airbnb_clone.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api_airbnb_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IconsController : ControllerBase
    {
        private readonly IIconsService _iconService;

        public IconsController(IIconsService iconService)
        {
            _iconService = iconService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_iconService.GetAllIcons());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(int id)
        {
            var icon = _iconService.GetIconsByID(id);
            if (icon == null)
            {
                return NotFound();
            }
            return Ok(icon);
        }

        [HttpPost]
        public IActionResult Post(AddUpdateIcons iconObject)
        {
            var icon = _iconService.AddIcons(iconObject);

            if (icon == null)
            {
                return BadRequest();
            }

            return Ok(new
            {
                message = "Criado Icons com Sucesso!!!",
                id = icon!.Id
            });
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Put([FromRoute] int id, [FromBody] AddUpdateIcons iconObject)
        {
            var icon = _iconService.UpdateIcons(id, iconObject);
            if (icon == null)
            {
                return NotFound();
            }

            return Ok(new
            {
                message = "Atualizado Icons com Sucesso!!!",
                id = icon!.Id
            });
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            if (!_iconService.DeleteIconsByID(id))
            {
                return NotFound();
            }

            return Ok(new
            {
                message = "Deletado Icons com Sucesso!!!",
                id = id
            });
        }

    }
}
