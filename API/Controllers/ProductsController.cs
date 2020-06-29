using System.Collections.Generic;
using System.Threading.Tasks;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Core.Entities;
using Core.Interfaces;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class ProductsController: ControllerBase
    {
        private readonly IProductRepository _productRepository;
        public ProductsController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts() 
        {
            var products = await _productRepository.GetProductsAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id) 
        {
            return await _productRepository.GetProductByIdAsync(id);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductBrands() 
        {
            return Ok(await _productRepository.GetProductBrandsAsync());
        }

        
        [HttpGet("types")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductTypes() 
        {
            return Ok(await _productRepository.GetProductTypesAsync());
        }
    }
}